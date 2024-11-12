// // Archivo: src/pages/api/sendEmail.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { pedido } = req.body;

//     // Configurar nodemailer para usar Gmail
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'adriangtoff@@gmail.com', 
//         pass: 'lphmrjxxyzyzlsnq',
//       },
//     });

//     // Contenido del correo electrónico
//     const mailOptions = {
//         from: 'adriangtoff@gmail.com', // Reemplazar con tu email
//         to: 'brayandaniel993@gmail.com', // Reemplazar con el email del cliente
//       subject: `Actualización de Pedido ${pedido.id}`,
//       text: `El pedido con ID ${pedido.id} ahora está en estado '${pedido.estado}'.`,
//     };

//     // Enviar el correo electrónico
//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: 'Correo enviado exitosamente' });
//     } catch (error) {
//       res.status(500).json({ error: 'Error al enviar el correo', details: error });
//     }
//   } else {
//     res.status(405).json({ error: 'Método no permitido' });
//   }
// }
