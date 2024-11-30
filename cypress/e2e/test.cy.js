describe('Product Management Frontend', () => {
  let baseUrl;

  before(() => {
    // Start the server and store the base URL
    cy.task('startServer').then((url) => {
      baseUrl = url;
    });
  });

  after(() => {
    // Stop the server after all tests
    cy.task('stopServer');
  });

  beforeEach(() => {
    // Visit the page for each test
    cy.visit(`${baseUrl}/upload.html`);
  });


  it('should show an error when the name field is empty', () => {
    cy.get('#price').type('50.00');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('M');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Unable to add product: Name is required.');

    });
  });

  it('should display a preview of the selected image', () => {
    // Stub a file input
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
  
    // Attach file to input and trigger change event
    cy.get('#image-upload').then(($input) => {
      $input[0].files = dataTransfer.files;
      $input.trigger('change');
    });
  
    // Check that FileReader and preview functionality worked
    cy.get('#image-preview').should('have.attr', 'src').and('include', 'data:image/png;base64');
  });

  it('should not update the image preview if no file is selected', () => {
    // Trigger function without selecting a file
    cy.get('#image-upload').trigger('change', { force: true });
  
    // Check that the image preview source is not updated
    cy.get('#image-preview').should('not.have.attr', 'src');
  });

  it('should not preview unsupported file types', () => {
    // Stub a file with an unsupported type
    const file = new File(['dummy content'], 'example.txt', { type: 'text/plain' });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
  
    cy.get('#image-upload').then(($input) => {
      $input[0].files = dataTransfer.files;
      $input.trigger('change');
    });
  
    // Check that the preview is not updated
    cy.get('#image-preview').should('not.have.attr', 'src');
  });
  
  it('should handle large files gracefully', () => {
    // Stub a large file
    const largeFile = new File([new ArrayBuffer(10 * 1024 * 1024)], 'large-file.png', { type: 'image/png' });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(largeFile);
  
    cy.get('#image-upload').then(($input) => {
      $input[0].files = dataTransfer.files;
      $input.trigger('change');
    });
  
    // Check that the FileReader processes the file correctly
    cy.get('#image-preview').should('have.attr', 'src').and('include', 'data:image/png;base64');
  });
  
  
  

  it('should show an error when the price field is empty', () => {
    cy.get('#name').type('Valid Name');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('M');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Price is required.');
    });
  });

  it('should show an error when the description field is empty', () => {
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('50.00');
    cy.get('#size').type('M');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Unable to add product: Please fill in all the fields.');
    });
    
  });

  it('should show an error when the size field is empty', () => {
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('50.00');
    cy.get('#description').type('A valid description.');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Unable to add product: Please fill in all the fields.'); // Match actual response
    });
  });

  it('should show an error when no image is uploaded', () => {
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('50.00');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('M');
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please select an image for the product.'); // Match actual response
    });
  });

  it('should successfully upload an image and submit the form', () => {
    cy.get('#name').type('Valid Product');
    cy.get('#price').type('100.00');
    cy.get('#description').type('This is a valid description.');
    cy.get('#size').type('L');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product uploaded successfully!');
    });
  });

  it('should show an error when the name is less than 2 characters', () => {
    cy.get('#name').type('A');
    cy.get('#price').type('25.00');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('S');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Name must be at least 2 characters long');
    });    
  });

  it('should show an error when the price is negative', () => {
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('-10.00');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('M');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();
  
    // Assert alert message contains relevant error
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Price cannot be negative');
    });
  });
  

  it('should show an error when the description exceeds 250 words', () => {
    const longDescription = 'word '.repeat(251); // Generate a string with 251 words
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('50.00');
    cy.get('#description').type(longDescription);
    cy.get('#size').type('M');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Description must not exceed 250 words.');
    });
  });

  it('should successfully add a new product', () => {
    cy.get('#name').type('Test Product');
    cy.get('#price').type('100.00');
    cy.get('#description').type('This is a valid product description.');
    cy.get('#size').type('L');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product uploaded successfully!');
    });
  });

  it('should handle malformed JSON response gracefully', () => {
    // Stub server response with malformed JSON
    cy.intercept('POST', '/add-product', {
      statusCode: 200,
      body: "This is not JSON"
    });
  
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('100.00');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('L');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();
  
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('An error occurred. Please try again.');
    });
  });
  
  it('should handle missing success field in response', () => {
    // Stub server response missing the 'success' field
    cy.intercept('POST', '/add-product', {
      statusCode: 200,
      body: JSON.stringify({})
    });
  
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('100.00');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('L');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();
  
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Unable to add product: Unknown error.');
    });
  });
  
  it('should handle missing message field in error response', () => {
    // Stub server response with success: false but no message
    cy.intercept('POST', '/add-product', {
      statusCode: 400,
      body: JSON.stringify({ success: false })
    });
  
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('100.00');
    cy.get('#description').type('A valid description.');
    cy.get('#size').type('L');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();
  
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Unable to add product: Unknown error.');
    });
  });
  
});
