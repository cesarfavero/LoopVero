# `chooseBrowserCredentialTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547648-547664](../../../../../../../reference/runtime/host-main.cjs#L547648-L547664) | `FunctionDeclaration` | sim | `targets, targetSite, inspect` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547648-547664](../../../../../../../reference/runtime/host-main.cjs#L547648-L547664) | 5 | 0 | 1 | 4 | 0 | 0 |

### host:547648

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `states.filter`, `targets.filter`, `trustedBrowserOrigin`.

SHA-256 do trecho: `45d7a2c918761a041c5fa6abe0260388d97a53d76e40c2466526e788427f6e41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
