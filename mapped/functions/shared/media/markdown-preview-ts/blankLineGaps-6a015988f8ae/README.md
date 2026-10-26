# `blankLineGaps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721971-721986](../../../../../../reference/runtime/host-main.cjs#L721971-L721986) | `FunctionDeclaration` | não | `input2` |
| [evaluation:539948-539963](../../../../../../reference/runtime/sand-eval-runner.cjs#L539948-L539963) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721971-721986](../../../../../../reference/runtime/host-main.cjs#L721971-L721986) | 2 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:539948-539963](../../../../../../reference/runtime/sand-eval-runner.cjs#L539948-L539963) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:721971

Chamadas escritas diretamente neste corpo: `gaps.push`, `input2.indexOf`.

Alvos de atribuição ou incremento: `at3`, `between`, `blank`, `previous`.

SHA-256 do trecho: `7d1e293f92d3b12541bb416bffcd4f665e9de25115ba5d691571fddd9d59b520`.

### evaluation:539948

Chamadas escritas diretamente neste corpo: `gaps.push`, `input2.indexOf`.

Alvos de atribuição ou incremento: `at3`, `between`, `blank`, `previous`.

SHA-256 do trecho: `7d1e293f92d3b12541bb416bffcd4f665e9de25115ba5d691571fddd9d59b520`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
