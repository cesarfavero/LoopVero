# `BrowserCredentialFiller.fillSelectedTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547833-547897](../../../../../../../reference/runtime/host-main.cjs#L547833-L547897) | `method` | sim | `targetWebSocketDebuggerUrl, request5, event = "allow-once", options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547833-547897](../../../../../../../reference/runtime/host-main.cjs#L547833-L547897) | 4 | 0 | 2 | 4 | 0 | 0 |

### host:547833

Chamadas escritas diretamente neste corpo: `clearanceOf`, `credentialFillAuditResult`, `credentialFillFailureDetail`, `discovery.targets.find`, `filledLoginDetail`, `hostFromSite`, `matchCredentialItemToSite`, `stepOf`, `this.auditFill`, `this.executeTargetFill`, `this.listPages`, `trustedBrowserOrigin`.

SHA-256 do trecho: `c2fc0da2379424770ff20d15a7b97a86dcb487b380c2e34bee4b6b1ff5b33d4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
