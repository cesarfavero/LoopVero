# `registrableDomainOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760835-760841](../../../../../../../reference/runtime/host-main.cjs#L760835-L760841) | `FunctionDeclaration` | não | `path33, url2` |
| [evaluation:551650-551656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551650-L551656) | `FunctionDeclaration` | não | `path33, url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760835-760841](../../../../../../../reference/runtime/host-main.cjs#L760835-L760841) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:551650-551656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551650-L551656) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:760835

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`, `parseSecureValueHttpsUrl`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b99c2f9af745bd6ca19edf7e52f0660bea1dd4bc38c880c7b0e2a9a2850e2af3`.

### evaluation:551650

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`, `parseSecureValueHttpsUrl`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b99c2f9af745bd6ca19edf7e52f0660bea1dd4bc38c880c7b0e2a9a2850e2af3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
