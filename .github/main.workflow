workflow "New workflow" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "actions/npm@c555744"
  args = "ci"
}

action "Build" {
  uses = "actions/npm@c555744"
  needs = ["Install"]
  args = "run build"
}
