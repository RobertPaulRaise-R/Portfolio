function Services() {
  return (
    <div className="flex flex-col items-center py-10">
      <h3 className="oswald text-3xl">Services</h3>
      <div className="mt-10 flex w-96 flex-col items-center justify-center border-2 border-black py-5">
        <p className="text-2xl">UI Design</p>
        <div>
          <p className="mt-2 bg-blue-700 px-3 py-1 text-white">Figma</p>
        </div>
      </div>

      <div className="mt-10 flex w-96 flex-col items-center justify-center border-2 border-black py-5">
        <p className="text-2xl">Front-End Development</p>
        <div className="flex gap-3">
          <p className="mt-2 bg-blue-700 px-3 py-1 text-white">Html & CSS</p>
          <p className="mt-2 bg-blue-700 px-3 py-1 text-white">JavaScript</p>
          <p className="mt-2 bg-blue-700 px-3 py-1 text-white">React</p>
        </div>
      </div>

      <div className="mt-10 flex w-96 flex-col items-center justify-center border-2 border-black py-5">
        <p className="text-2xl">Photo Editing</p>
        <div>
          <p className="mt-2 bg-blue-700 px-3 py-1 text-white">Photoshop</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
