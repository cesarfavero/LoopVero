# `removeTreeNoFollow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453649-453669](../../../../../reference/runtime/host-main.cjs#L453649-L453669) | `FunctionDeclaration` | sim | `parent, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453649-453669](../../../../../reference/runtime/host-main.cjs#L453649-L453669) | 2 | 1 | 6 | 2 | 1 | 1 |

### host:453649

Chamadas escritas diretamente neste corpo: `.catch`, `descriptorPathOf`, `directory.handle.close`, `entryOf`, `findSystemErrno`, `openDirectoryNoFollow2`, `removeTreeNoFollow`.

Alvos de atribuição ou incremento: `directory`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `3bb21aee13f6843f6f932e9d71c0fb04cc184d657fbd1e56be7425079e9fa4a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
