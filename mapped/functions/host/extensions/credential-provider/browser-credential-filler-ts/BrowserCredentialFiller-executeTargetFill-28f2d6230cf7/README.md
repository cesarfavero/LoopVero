# `BrowserCredentialFiller.executeTargetFill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548183-548235](../../../../../../../reference/runtime/host-main.cjs#L548183-L548235) | `method` | sim | `target, request5, steps = ["login", "username-first"]` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548183-548235](../../../../../../../reference/runtime/host-main.cjs#L548183-L548235) | 9 | 0 | 2 | 7 | 0 | 0 |

### host:548183

Chamadas escritas diretamente neste corpo: `URL.canParse`, `allowedFormActionOriginsForFill`, `matchCredentialItemToSite`, `new URL`, `normalizedCredentialPathname`, `request5.username.trim`, `steps.includes`, `this.executeFill`, `this.inspectTarget`, `trustedBrowserOrigin`.

SHA-256 do trecho: `ff83568b854117750906a9092f6291b501b423a3faa5d5c3bb420c5e66a0a12a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
