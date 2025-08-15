import { useState, useEffect } from "react";
import { db } from "../firebase";
import { get, push,ref, remove } from "firebase/database";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    tech: [''],
    liveDemo: '',
    github: ''
  });

  // Fetch projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      const dbref = ref(db, 'projects');
      const snapshot = await get(dbref);
      if(snapshot.exists()){
        const data = snapshot.val();
        const dataVal = Object.entries(data).map(([key,{title,description,image,tech,liveDemo,github}])=>({key,title,description,image,tech,liveDemo,github}))
        setProjects(prev=>dataVal)
      }else{
        setProjects([])
      }
    };
    fetchProjects();
  }, [projects]);

  // Add project to Firestore
  const addProject = async () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      const dbRef = ref(db, 'projects');
      await push(dbRef,{
        title: newProject.title,
        description: newProject.description,
        image: newProject.image || '',
        tech:newProject.tech || [''],
        liveDemo: newProject.liveDemo || '',
        github: newProject.github || ''
      });
      setProjects([...projects, newProject]);
      setShowAddModal(false)  
    } else {
      alert('Please fill in at least the title and description fields.');
    }
  };

  // Update project in Firestore
  const updateProject = async () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      // const projectRef = doc(db, "projects", editingProject.id);
      // await updateDoc(projectRef, {
      //   ...newProject,
      //   tech: newProject.tech.filter(tech => tech.trim() !== ''),
      //   image: newProject.image || 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop',
      //   liveDemo: newProject.liveDemo || '#',
      //   github: newProject.github || '#'
      // });
      // setProjects(projects.map(project =>
      //   project.id === editingProject.id
      //     ? { ...newProject, id: editingProject.id }
      //     : project
      // ));
      // setNewProject({
      //   title: '',
      //   description: '',
      //   image: '',
      //   tech: [''],
      //   liveDemo: '',
      //   github: ''
      // });
      // setShowEditModal(false);
      // setEditingProject(null);
    } else {
      alert('Please fill in at least the title and description fields.');
    }
  };

  // Delete project from Firestore
  const deleteProject = async (id) => {
    try{
      const dbref = ref(db,`projects/${id}`)
    await remove(dbref)
    const newProjectsData = projects.filter(project=>project.key!==id)
    setProjects(newProjectsData)
    }catch(e){
      console.error(e)
    }
  };

  const addTechField = () => {
    setNewProject({
      ...newProject,
      tech: [...newProject.tech, '']
    });
  };

  const removeTechField = (index) => {
    const newTech = newProject.tech.filter((_, i) => i !== index);
    setNewProject({
      ...newProject,
      tech: newTech.length > 0 ? newTech : ['']
    });
  };

  const updateTechField = (index, value) => {
    const newTech = [...newProject.tech];
    newTech[index] = value;
    setNewProject({
      ...newProject,
      tech: newTech
    });
  };

  const editProject = (project) => {
    setEditingProject(project);
    setNewProject({ ...project });
    setShowEditModal(true);
  };

  return (
    <section id="projects" className="section-padding px-4 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            My <span className="text-accent-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div
                key={`my-portfolio-project-${index}`}
                className="project-card rounded-xl overflow-hidden"
                style={{ marginTop: `${index * 10}px` }} // Example inline style
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setSelectedProject(project)}
                  />
                  <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <i className="fas fa-expand text-white text-2xl"></i>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => editProject(project)}
                      className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <i className="fas fa-edit text-sm"></i>
                    </button>
                    <button
                      onClick={() => deleteProject(project.key)}
                      className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <i className="fas fa-trash text-sm"></i>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-accent-blue font-montserrat">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech && project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="flex-1 bg-accent-blue text-dark-bg py-2 px-4 rounded-lg text-center font-semibold hover:bg-accent-hover transition-colors duration-300"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 border border-accent-blue text-accent-blue py-2 px-4 rounded-lg text-center font-semibold hover:bg-accent-blue hover:text-dark-bg transition-all duration-300"
                    >
                      <i className="fab fa-github mr-2"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}


          {/* Add Project Button */}
          <div
            className="project-card rounded-xl overflow-hidden fade-in border-2 border-dashed border-accent-blue/50 hover:border-accent-blue transition-all duration-300 cursor-pointer"
            onClick={() => setShowAddModal(true)}
          >
            <div className="h-full flex items-center justify-center min-h-[400px] hover:bg-accent-blue/5 transition-colors duration-300">
              <div className="text-center">
                <i className="fas fa-plus text-6xl text-accent-blue mb-4"></i>
                <p className="text-accent-blue font-semibold text-lg">Add New Project</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Lightbox */}
        {selectedProject && (
          <div
            className="fixed inset-0 lightbox z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="max-w-4xl w-full bg-dark-secondary rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-dark-bg/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-dark-bg transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent-blue font-montserrat">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech && selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveDemo}
                    className="bg-accent-blue text-dark-bg py-3 px-6 rounded-lg font-semibold hover:bg-accent-hover transition-colors duration-300"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    className="border border-accent-blue text-accent-blue py-3 px-6 rounded-lg font-semibold hover:bg-accent-blue hover:text-dark-bg transition-all duration-300"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Project Modal */}
        {showAddModal && (
          <div className="fixed inset-0 lightbox z-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-dark-secondary rounded-xl p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-accent-blue font-montserrat">
                  Add New Project
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-8 h-8 bg-dark-bg text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Project Title</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg form-input"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Description</label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg form-input resize-none"
                    rows="3"
                    placeholder="Project description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Image URL</label>
                  <input
                    type="url"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg form-input"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Technologies</label>
                  {newProject.tech.map((tech, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={tech}
                        onChange={(e) => updateTechField(index, e.target.value)}
                        className="flex-1 px-4 py-2 rounded-lg form-input"
                        placeholder="Technology name"
                      />
                      {newProject.tech.length > 1 && (
                        <button
                          onClick={() => removeTechField(index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addTechField}
                    className="text-sm px-3 py-1 bg-accent-blue/20 text-accent-blue rounded hover:bg-accent-blue/30 transition-colors"
                  >
                    <i className="fas fa-plus mr-1"></i>Add Technology
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-text">Live Demo URL</label>
                    <input
                      type="url"
                      value={newProject.liveDemo}
                      onChange={(e) => setNewProject({ ...newProject, liveDemo: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg form-input"
                      placeholder="https://demo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-text">GitHub URL</label>
                    <input
                      type="url"
                      value={newProject.github}
                      onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg form-input"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={addProject}
                  className="flex-1 btn-primary"
                >
                  Add Project
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 btn-outline"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Project Modal */}
        {showEditModal && (
          <div className="fixed inset-0 lightbox z-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-dark-secondary rounded-xl p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-accent-blue font-montserrat">
                  Edit Project
                </h3>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="w-8 h-8 bg-dark-bg text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Project Title</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg form-input"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Description</label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg form-input resize-none"
                    rows="3"
                    placeholder="Project description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Image URL</label>
                  <input
                    type="url"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg form-input"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text">Technologies</label>
                  {newProject.tech.map((tech, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={tech}
                        onChange={(e) => updateTechField(index, e.target.value)}
                        className="flex-1 px-4 py-2 rounded-lg form-input"
                        placeholder="Technology name"
                      />
                      {newProject.tech.length > 1 && (
                        <button
                          onClick={() => removeTechField(index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addTechField}
                    className="text-sm px-3 py-1 bg-accent-blue/20 text-accent-blue rounded hover:bg-accent-blue/30 transition-colors"
                  >
                    <i className="fas fa-plus mr-1"></i>Add Technology
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-text">Live Demo URL</label>
                    <input
                      type="url"
                      value={newProject.liveDemo}
                      onChange={(e) => setNewProject({ ...newProject, liveDemo: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg form-input"
                      placeholder="https://demo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-text">GitHub URL</label>
                    <input
                      type="url"
                      value={newProject.github}
                      onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg form-input"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={updateProject}
                  className="flex-1 btn-primary"
                >
                  Update Project
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 btn-outline"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;