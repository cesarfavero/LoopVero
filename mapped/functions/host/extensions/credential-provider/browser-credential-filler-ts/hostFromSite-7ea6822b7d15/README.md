# `hostFromSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547617-547622](../../../../../../../reference/runtime/host-main.cjs#L547617-L547622) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547617-547622](../../../../../../../reference/runtime/host-main.cjs#L547617-L547622) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:547617

Chamadas escritas diretamente neste corpo: `.host.toLowerCase`, `URL.canParse`, `new URL`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `c0657aca49edf59f520f7d2340a845f31ec57a0e8d4c680c5906752540970659`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
