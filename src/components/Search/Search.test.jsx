import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

test('вызывает onSearch с правильным городом', () => {
  const onSearchMock = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <Search onSearch={onSearchMock} />,
  );

  const input = getByPlaceholderText('Введите название города');
  const button = getByRole('button', { name: /поиск/i });

  fireEvent.change(input, { target: { value: 'Москва' } });
  fireEvent.click(button);

  expect(onSearchMock).toHaveBeenCalledWith('Москва');
});
