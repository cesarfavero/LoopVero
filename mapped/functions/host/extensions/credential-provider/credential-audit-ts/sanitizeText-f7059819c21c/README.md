# `sanitizeText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/credential-audit.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/credential-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546897-546909](../../../../../../../reference/runtime/host-main.cjs#L546897-L546909) | `FunctionDeclaration` | não | `value, sensitiveValues` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546897-546909](../../../../../../../reference/runtime/host-main.cjs#L546897-L546909) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:546897

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `escapeRegExp3`, `new RegExp`, `sanitized.replace`, `sanitized.slice`, `sensitiveVariants`.

Alvos de atribuição ou incremento: `sanitized`.

SHA-256 do trecho: `f5bffbd5d59a1c9a7b859de8df447ace2e6407312fedf4323f2fd1153b0e0107`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
