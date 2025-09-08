import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@layouts/MainLayout'
import Home from '@pages/Home'
import Resume from '@pages/Resume'
import Preview from '@pages/Preview'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
  <Route path="resume" element={<Resume />} />
  <Route path="preview" element={<Preview />} />
      </Route>
    </Routes>
  )
}
