# `encodeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724989-724993](../../../../../../../reference/runtime/host-main.cjs#L724989-L724993) | `FunctionDeclaration` | não | `activity, message` |
| [evaluation:479960-479964](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479960-L479964) | `FunctionDeclaration` | não | `activity, message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724989-724993](../../../../../../../reference/runtime/host-main.cjs#L724989-L724993) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479960-479964](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479960-L479964) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724989

Chamadas escritas diretamente neste corpo: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 do trecho: `b4a8efbd7fb0d161a3376d2133dc41c01dfea17088a7a55e1699182c5ea644cd`.

### evaluation:479960

Chamadas escritas diretamente neste corpo: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 do trecho: `b4a8efbd7fb0d161a3376d2133dc41c01dfea17088a7a55e1699182c5ea644cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
