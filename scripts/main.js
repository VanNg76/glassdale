import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNoteButton.js"
import { ShowWitnessButton } from "./witness/WitnessList.js"
import { NoteList } from "./notes/NoteList.js"  /* need to import NoteList() even we do not call it directly but
                                          because after dispatch customeEvent will invoke that function */

CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()
ShowWitnessButton()
