import { Router } from 'express';
import { getMemoList, writeMemo, editMemo, deleteMemo } from '../controllers/memo';

const router = Router();

router.route('/').get(getMemoList).post(writeMemo);

router.route('/:id').put(editMemo).delete(deleteMemo);

export default router;
