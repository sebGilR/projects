import './style.scss';
import display from './modules/displayController';
import * as  Project from './modules/project';

const loader = (() => {
  display.setListeners(Project.saveProject, Project.updateTodos);
  display.showProjects();
  display.showTodos();
})();

