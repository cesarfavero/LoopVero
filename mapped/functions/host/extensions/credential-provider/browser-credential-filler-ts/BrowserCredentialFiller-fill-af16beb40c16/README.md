# `BrowserCredentialFiller.fill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548103-548106](../../../../../../../reference/runtime/host-main.cjs#L548103-L548106) | `method` | sim | `request5, windowIndex, event = "allow-once"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548103-548106](../../../../../../../reference/runtime/host-main.cjs#L548103-L548106) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:548103

Chamadas escritas diretamente neste corpo: `this.fillPickedTarget`, `this.pickFillTarget`.

SHA-256 do trecho: `f0f15a700e4f9d39227ead93a9840e49210b185c87585cfd75fd1ce3e4535f7d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
