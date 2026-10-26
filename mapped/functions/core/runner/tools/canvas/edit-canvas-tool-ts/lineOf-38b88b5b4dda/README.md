# `lineOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775538-775544](../../../../../../../../reference/runtime/host-main.cjs#L775538-L775544) | `FunctionDeclaration` | não | `source, offset2` |
| [evaluation:575182-575188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575182-L575188) | `FunctionDeclaration` | não | `source, offset2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775538-775544](../../../../../../../../reference/runtime/host-main.cjs#L775538-L775544) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:575182-575188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575182-L575188) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:775538

Chamadas escritas diretamente neste corpo: `source.charCodeAt`.

Alvos de atribuição ou incremento: `i`, `line`.

SHA-256 do trecho: `68d6fe7f398d90de776f8261b8e596456340e43f49ecb3263018fe2572c3c5ac`.

### evaluation:575182

Chamadas escritas diretamente neste corpo: `source.charCodeAt`.

Alvos de atribuição ou incremento: `i`, `line`.

SHA-256 do trecho: `68d6fe7f398d90de776f8261b8e596456340e43f49ecb3263018fe2572c3c5ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
