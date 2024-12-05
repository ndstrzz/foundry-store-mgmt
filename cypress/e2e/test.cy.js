describe('Product Management Frontend', () => {
  let baseUrl;

  before(() => {
    cy.task('startServer').then((url) => {
      baseUrl = url;
    });
  });

  after(() => {
    cy.task('stopServer');
  });

  beforeEach(() => {
    cy.visit(`${baseUrl}/upload.html`);
  });


  it('should display a preview of the selected image', () => {
    // Stub a file input
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
  
    cy.get('#image-upload').then(($input) => {
      $input[0].files = dataTransfer.files;
      $input.trigger('change');
    });
  
    cy.get('#image-preview').should('have.attr', 'src').and('include', 'data:image/png;base64');
  });


  

  
  
  it('should show an error when the name field is empty', () => {
    cy.get('#price').type('100.00');
    cy.get('#description').type('Valid description.');
    cy.get('#size').type('M');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();
  
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Unable to add product: Name is required.');
    });
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
        expect(alertText).to.equal('Please fill in all the fields.');
    });
});


it('should show an error when the size field is empty', () => {
    cy.get('#name').type('Valid Name');
    cy.get('#price').type('50.00');
    cy.get('#description').type('A valid description.');
    cy.get('#image-upload').attachFile('test-image.jpg', { subjectType: 'drag-n-drop' });
    cy.get('.upload-button').click();

    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill in all the fields.');
    });
});

it('should show an error when no image is uploaded', () => {
  cy.get('#name').type('Valid Name');
  cy.get('#price').type('50.00');
  cy.get('#description').type('A valid description.');
  cy.get('#size').type('M');
  cy.get('.upload-button').click();

  cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please select an image for the product.');
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
  
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Price cannot be negative');
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


  
  
});