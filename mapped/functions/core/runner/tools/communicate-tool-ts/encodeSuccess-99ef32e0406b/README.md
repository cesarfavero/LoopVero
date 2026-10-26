# `encodeSuccess`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724994-724998](../../../../../../../reference/runtime/host-main.cjs#L724994-L724998) | `FunctionDeclaration` | não | `activity, result` |
| [evaluation:479965-479969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479965-L479969) | `FunctionDeclaration` | não | `activity, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724994-724998](../../../../../../../reference/runtime/host-main.cjs#L724994-L724998) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479965-479969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479965-L479969) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724994

Chamadas escritas diretamente neste corpo: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 do trecho: `69ebc6a2c17514a0a33a61d1857d3dc54cd0eaa45df85e777b7e11069407a78d`.

### evaluation:479965

Chamadas escritas diretamente neste corpo: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 do trecho: `69ebc6a2c17514a0a33a61d1857d3dc54cd0eaa45df85e777b7e11069407a78d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
