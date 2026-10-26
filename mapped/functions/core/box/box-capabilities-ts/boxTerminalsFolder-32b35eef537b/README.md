# `boxTerminalsFolder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546683-546685](../../../../../../reference/runtime/host-main.cjs#L546683-L546685) | `FunctionDeclaration` | não | `box` |
| [evaluation:475790-475792](../../../../../../reference/runtime/sand-eval-runner.cjs#L475790-L475792) | `FunctionDeclaration` | não | `box` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546683-546685](../../../../../../reference/runtime/host-main.cjs#L546683-L546685) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475790-475792](../../../../../../reference/runtime/sand-eval-runner.cjs#L475790-L475792) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546683

Chamadas escritas diretamente neste corpo: `box.getTerminalsFolder`.

SHA-256 do trecho: `aeabfd7b8ca91bc3c0193d325911ca38de886c5ed9564b8a659276291cefc08f`.

### evaluation:475790

Chamadas escritas diretamente neste corpo: `box.getTerminalsFolder`.

SHA-256 do trecho: `aeabfd7b8ca91bc3c0193d325911ca38de886c5ed9564b8a659276291cefc08f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
