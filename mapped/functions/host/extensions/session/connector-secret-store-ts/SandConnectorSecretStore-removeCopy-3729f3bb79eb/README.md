# `SandConnectorSecretStore.removeCopy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719205-719216](../../../../../../../reference/runtime/host-main.cjs#L719205-L719216) | `method` | não | `folder, copy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719205-719216](../../../../../../../reference/runtime/host-main.cjs#L719205-L719216) | 2 | 0 | 0 | 1 | 1 | 1 |

### host:719205

Chamadas escritas diretamente neste corpo: `isFileOrGone`, `this.log`, `this.removeFinalEntry`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ba39276fd36dfeb9f4fc7c17185c151c980dd1e6b2518ec548c12025bbc010d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
