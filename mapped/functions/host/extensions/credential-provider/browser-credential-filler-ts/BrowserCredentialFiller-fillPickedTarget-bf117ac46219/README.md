# `BrowserCredentialFiller.fillPickedTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548156-548182](../../../../../../../reference/runtime/host-main.cjs#L548156-L548182) | `method` | sim | `target, request5, event = "allow-once"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548156-548182](../../../../../../../reference/runtime/host-main.cjs#L548156-L548182) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:548156

Chamadas escritas diretamente neste corpo: `clearanceOf`, `credentialFillAuditResult`, `credentialFillFailureDetail`, `filledLoginDetail`, `hostFromSite`, `stepOf`, `this.auditFill`, `this.executeTargetFill`.

SHA-256 do trecho: `c07e11218ed71e820572af57d4ac57031a853686f3faed7f7f1ef56342293058`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
