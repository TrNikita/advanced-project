import { useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

const people = [
	{ id: 1, name: 'Durward Reynolds', unavailable: false },
	{ id: 2, name: 'Kenton Towne', unavailable: false },
	{ id: 3, name: 'Therese Wunsch', unavailable: false },
	{ id: 4, name: 'Benedict Kessler', unavailable: true },
	{ id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export function ListBox() {
	const [selectedPerson, setSelectedPerson] = useState(people[0]);

	return (
		<HListBox value={selectedPerson} onChange={setSelectedPerson}>
			<HListBox.Button>{selectedPerson.name}</HListBox.Button>
			<HListBox.Options>
				{people.map((person) => (
					<HListBox.Option
						key={person.id}
						value={person}
						disabled={person.unavailable}
					>
						{person.name}
					</HListBox.Option>
				))}
			</HListBox.Options>
		</HListBox>
	);
}
