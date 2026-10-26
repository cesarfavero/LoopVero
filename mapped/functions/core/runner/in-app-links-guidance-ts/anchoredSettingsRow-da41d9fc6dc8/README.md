# `anchoredSettingsRow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557624-557630](../../../../../../reference/runtime/host-main.cjs#L557624-L557630) | `FunctionDeclaration` | não | `row, section` |
| [evaluation:546071-546077](../../../../../../reference/runtime/sand-eval-runner.cjs#L546071-L546077) | `FunctionDeclaration` | não | `row, section` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557624-557630](../../../../../../reference/runtime/host-main.cjs#L557624-L557630) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:546071-546077](../../../../../../reference/runtime/sand-eval-runner.cjs#L546071-L546077) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:557624

Chamadas escritas diretamente neste corpo: `isSandSettingsAnchorId`, `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `ce804d65554a0329d5bb421f83f73b420f90c84a73092e01f6d5c309fb0eefdf`.

### evaluation:546071

Chamadas escritas diretamente neste corpo: `isSandSettingsAnchorId`, `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `ce804d65554a0329d5bb421f83f73b420f90c84a73092e01f6d5c309fb0eefdf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
