# `BrowserCredentialFiller.resolveTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548008-548102](../../../../../../../reference/runtime/host-main.cjs#L548008-L548102) | `method` | sim | `item, siteHint, windowIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548008-548102](../../../../../../../reference/runtime/host-main.cjs#L548008-L548102) | 9 | 0 | 3 | 7 | 0 | 0 |

### host:548008

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `chooseBrowserCredentialTarget`, `credentialFillFailureDetail`, `eligible.map`, `inspected.every`, `inspected.filter`, `inspected.flatMap`, `inspected.map`, `inspected.some`, `mergedPageDiagnostics`, `new Map`, `partitionTargetsByWindow`, `this.discoverTargets`, `trustedBrowserOrigin`.

SHA-256 do trecho: `50aefeab0f33a466c969e5eeea3204df9ba4ce7355a83ab6e3ceda6b8e69da35`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
