# `CredentialFillExecutor.handOffTaken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-executor.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:544714-544734](../../../../../../../reference/runtime/host-main.cjs#L544714-L544734) | `method` | sim | `connection, objectId, frame` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544714-544734](../../../../../../../reference/runtime/host-main.cjs#L544714-L544734) | 4 | 1 | 3 | 3 | 1 | 1 |

### host:544714

Chamadas escritas diretamente neste corpo: `Date.now`, `connection.send`, `delay2`, `frameById`, `frameTreeResultSchema.parse`, `this.callPreparedState`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `46facfb588b008d02e4deb4d129367cfec69512b46d3e978d57ae5eadc399692`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
