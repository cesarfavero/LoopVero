# `parseImportOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/chrome-cookie-import/chrome-cookie-import-service.ts` · [README do módulo](../../../../../../modules/host/extensions/chrome-cookie-import/chrome-cookie-import-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:506665-506693](../../../../../../../reference/runtime/host-main.cjs#L506665-L506693) | `FunctionDeclaration` | não | `stdout` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506665-506693](../../../../../../../reference/runtime/host-main.cjs#L506665-L506693) | 8 | 0 | 0 | 1 | 3 | 1 |

### host:506665

Chamadas escritas diretamente neste corpo: `.at`, `.filter`, `.map`, `JSON.parse`, `asCount`, `new ChromeCookieImportResultError`, `stdout.split`.

Alvos de atribuição ou incremento: `parsed2`.

Alvos de lançamento explícito: `ChromeCookieImportResultError`.

SHA-256 do trecho: `2cd72cf773f97747dbf51201fb2c4c6752e03a77d97eef32689500cc5e86abbc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
