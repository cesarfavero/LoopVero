# `tallyFileOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-transfer.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479351-479365](../../../../../../../reference/runtime/host-main.cjs#L479351-L479365) | `FunctionDeclaration` | não | `summary, outcome, size` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479351-479365](../../../../../../../reference/runtime/host-main.cjs#L479351-L479365) | 5 | 0 | 0 | 0 | 0 | 0 |

### host:479351

Chamadas escritas diretamente neste corpo: `tallySkippedInaccessible`.

Alvos de atribuição ou incremento: `summary.bytesUploaded`, `summary.failures`, `summary.filesUploaded`, `summary.metadataFailures`, `summary.oversize`, `summary.skippedUnchanged`.

SHA-256 do trecho: `a6b12fb2716fffe14b8c996c798912778e99ab5770f52424b4ef885ba0859075`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
