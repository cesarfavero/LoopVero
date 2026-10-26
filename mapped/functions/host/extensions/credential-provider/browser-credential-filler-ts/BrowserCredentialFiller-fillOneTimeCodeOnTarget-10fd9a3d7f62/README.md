# `BrowserCredentialFiller.fillOneTimeCodeOnTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547898-548007](../../../../../../../reference/runtime/host-main.cjs#L547898-L548007) | `method` | sim | `targetWebSocketDebuggerUrl, request5, event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547898-548007](../../../../../../../reference/runtime/host-main.cjs#L547898-L548007) | 8 | 0 | 3 | 7 | 0 | 0 |

### host:547898

Chamadas escritas diretamente neste corpo: `URL.canParse`, `allowedFormActionOriginsFor`, `clearanceOf`, `credentialFillAuditResult`, `credentialFillFailureDetail`, `discovery.targets.find`, `hostFromSite`, `matchCredentialItemToSite`, `new URL`, `normalizedCredentialPathname`, `this.auditFill`, `this.executeFill`, `this.inspectTarget`, `this.listPages`, `trustedBrowserOrigin`.

SHA-256 do trecho: `0ecea026b9b8b14024a22671967ead6832bb2a68063219ce22c5e9aa9338b69e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
