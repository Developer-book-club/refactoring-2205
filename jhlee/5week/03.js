function renderPerson(outStream, person) {
  const result = [];
  result.push(`${person.name}`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

function photoDiv(p) {
  return ['div', emitPhotoData(p), 'div'].join('\n');
}

function emitPhotoData(p) {
  return [
    `title: ${p.title}`,
    `location: ${p.location}`,
    `date: ${p.date.toDateString()}`,
  ].join('\n');
}
