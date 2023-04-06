//Hello MTTP friends! We are using Express for defining the functions of our api. An brief explanation about each function will be defined above the function.
//These functions are proceeded by the commented out code from the starter that I modeled after, which can be found here: 
//https://dev.to/prisma/adding-an-api-and-database-to-your-nuxt-app-with-prisma-2nlp
//*Note: Please se schema.prisma file for more notes about this article. 

import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


//<=================================================================================================>//

// ======> Attempt 1 at POST function for creating a Student
app.post('/students', async (req, res) => {
    const { firstName, lastName, phoneNumber, email, dateOfBirth, address } = req.body;
  
    try {
      const student = await prisma.student.create({
        data: {
          firstName,
          lastName,
          phoneNumber,
          email,
          dateOfBirth,
          address
        }
      });
  
      res.status(200).json(student);
    } catch (err) {
      console.error(err);
      res.status(500).send('Unable to create student.');
    }
  });

// ======> Starter POST function for creating a new Post
// app.post('/post', async (req, res) => {
//   const { title, content, authorEmail } = req.body

//   const post = await prisma.post.create({
//     data: {
//       title,
//       content,
//       author: {
//         connect: {
//           email: authorEmail
//         }
//       }
//     }
//   })

//   res.status(200).json(post)
// })

//<=================================================================================================>//

// ======> Attempt 1 at PUT function for creating a Student ????? (this may be where we update a Student instead. ) Update: THIS IS FUNCTION IS CURRENTLY NOT WORKING (4/6/2023)
app.put('/student/:id', async (req, res) => {
    const { id } = req.params
    const student = await prisma.student.update({
      where: {
        id: parseInt(id),
      },
      data: req.body,
    })
    res.json(student)
  })

  // ======> Starter PUT function for publishing a Post
// app.put('/publish/:id', async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.post.update({
//     where: {
//       id: parseInt(id),
//     },
//     data: { published: true },
//   })
//   res.json(post)
// })

//<=================================================================================================>//

// ======> Attempt 1 at DELETE function for deleting a Student
app.delete('/student/:id', async (req, res) => {
    const { id } = req.params
    const student = await prisma.student.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json(student)
  })

// ======> Starter DELETE function for deleting a Post
// app.delete(`/post/:id`, async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.post.delete({
//     where: {
//       id: parseInt(id),
//     },
//   })
//   res.json(post)
// })

//<=================================================================================================>//

// ======> Attempt 1 at GET function for getting a Student 
app.get('/students/:id', async (req, res) => {
    const { id } = req.params
    const student = await prisma.student.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    res.json(student)
  })

  // ======> Starter GET function for retrieving a Post
// app.get(`/post/:id`, async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.post.findUnique({
//     where: {
//       id: parseInt(id),
//     },
//     include: { author: true }
//   })
//   res.json(post)
// })

//<=================================================================================================>//
// ======> Attempt 1 at GET function for filtering Students according to searchString
app.get('/searchStudents', async (req, res) => {
    const { searchString } = req.query
    const students = await prisma.student.findMany({
      where: {
        OR: [
          {
            firstName: {
              contains: searchString,
            },
          },
          {
            lastName: {
              contains: searchString,
            },
          },
        ],
      },
    })
    res.json(students)
  })  

export default {
  path: '/api',
  handler: app
}

// ======> Starter GET function for filtering all Students according to searchString
// app.get('/filterPosts', async (req, res) => {
//   const { searchString } = req.query
//   const draftPosts = await prisma.post.findMany({
//     where: {
//       OR: [
//         {
//           title: {
//             contains: searchString,
//           },
//         },
//         {
//           content: {
//             contains: searchString,
//           },
//         },
//       ],
//     },
//   })
//   res.json(draftPosts)
// })

//<=================================================================================================>//

//OTHER STARTER FUNCTIONS///

// ======> Starter GET function for retrieving all Posts that are published
// app.get('/feed', async (req, res) => {
//   const posts = await prisma.post.findMany({
//     where: { published: true },
//     include: { author: true },
//   })
//   res.json(posts)
// })

// ======> Starter POST function for creating a new User
// app.post(`/user`, async (req, res) => {
//     const result = await prisma.user.create({
//       data: {
//         ...req.body,
//       },
//     })
//     res.json(result)
//   })

// ======> Starter GET function for getting all unpublished Posts
// app.get('/drafts', async (req, res) => {
//   const posts = await prisma.post.findMany({
//     where: { published: false },
//     include: { author: true }
//   })
//   res.json(posts)
// })