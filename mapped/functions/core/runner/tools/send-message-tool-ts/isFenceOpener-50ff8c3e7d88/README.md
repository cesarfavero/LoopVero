# `isFenceOpener`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760693-760696](../../../../../../../reference/runtime/host-main.cjs#L760693-L760696) | `FunctionDeclaration` | não | `marker17, info2` |
| [evaluation:551508-551511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551508-L551511) | `FunctionDeclaration` | não | `marker17, info2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760693-760696](../../../../../../../reference/runtime/host-main.cjs#L760693-L760696) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:551508-551511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551508-L551511) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:760693

Chamadas escritas diretamente neste corpo: `/\\[nr]/.test`, `info2.includes`, `marker17.startsWith`.

SHA-256 do trecho: `71d70a3ffa3143503d280c2afef50e68bdd696521283b995226a0c2ca88c1818`.

### evaluation:551508

Chamadas escritas diretamente neste corpo: `/\\[nr]/.test`, `info2.includes`, `marker17.startsWith`.

SHA-256 do trecho: `71d70a3ffa3143503d280c2afef50e68bdd696521283b995226a0c2ca88c1818`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
