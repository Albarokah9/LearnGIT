// <reference types="cypress" />

describe('My First Test', () => { // describe('My First Test', () => { ... }) → Menandakan bahwa semua test di dalamnya terkait dengan 'My First Test'
    it('clicking "type" shows the right heading', () => { // Menentukan test case "mengklik 'type' akan menampilkan judul yang benar"
        cy.visit('https://example.cypress.io'); // Membuka halaman https://example.cypress.io
        
        cy.pause(); // cy.pause() digunakan untuk menjeda (pause) eksekusi test sementara
        
        cy.contains('type').click(); // Klik elemen yang mengandung teks 'type'

        // Harus berada di URL baru yang mengandung '/commands/actions'
        cy.url().should('include', '/commands/actions');     // cy.url().should() digunakan untuk memeriksa apakah URL halaman sesuai dengan yang diharapkan.

        // 
        cy.get('.action-email') // cy.get('.action-email') → Mencari elemen dengan class .action-email
            .type('contoh@gmail.com') // .type('contoh@gmail.com') → Mengetikkan 'contoh@gmail.com' ke dalam elemen tersebut
            .should('have.value', 'contoh@gmail.com'); // .should('have.value', 'contoh@gmail.com') → Memastikan bahwa input sekarang berisi 'contoh@gmail.com'
    });
});