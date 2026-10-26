# `BrowserCredentialFiller.enqueueCdpOperation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547790-547806](../../../../../../../reference/runtime/host-main.cjs#L547790-L547806) | `method` | sim | `target, operation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547790-547806](../../../../../../../reference/runtime/host-main.cjs#L547790-L547806) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:547790

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `entry.queue.enqueue`, `new PromiseQueue`, `this.cdpOperations.delete`, `this.cdpOperations.get`, `this.cdpOperations.set`.

Alvos de atribuição ou incremento: `entry`, `entry.pending`.

SHA-256 do trecho: `fe748783b5d59993addb7837f7065e471f36d924c9636ccaf6645c3cddf773a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
