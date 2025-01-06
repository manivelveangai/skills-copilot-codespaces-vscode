function skillsMembers() {
  return {
    name: 'skillsMembers',
    type: 'array',
    of: [{ type: 'reference', to: [{ type: 'member' }] }],
  };
}