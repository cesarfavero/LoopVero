# `parseSlackChannelPeople`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735148-735162](../../../../../../../reference/runtime/host-main.cjs#L735148-L735162) | `FunctionDeclaration` | não | `channelMessages` |
| [evaluation:540722-540736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540722-L540736) | `FunctionDeclaration` | não | `channelMessages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735148-735162](../../../../../../../reference/runtime/host-main.cjs#L735148-L735162) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:540722-540736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540722-L540736) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:735148

Chamadas escritas diretamente neste corpo: `/^([^:<>]+):/.exec`, `/^([^<>]+?)\s*<([^\s<>]+@[^\s<>]+)>:/.exec`, `[computed].trim`, `channelMessages.split`, `line.trim`, `people.push`, `trimmed.startsWith`.

SHA-256 do trecho: `6aafbd4e0e2df9915d89bfa1cc842bf458bb7b3386a98e810f63c0b0602a25c7`.

### evaluation:540722

Chamadas escritas diretamente neste corpo: `/^([^:<>]+):/.exec`, `/^([^<>]+?)\s*<([^\s<>]+@[^\s<>]+)>:/.exec`, `[computed].trim`, `channelMessages.split`, `line.trim`, `people.push`, `trimmed.startsWith`.

SHA-256 do trecho: `6aafbd4e0e2df9915d89bfa1cc842bf458bb7b3386a98e810f63c0b0602a25c7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
