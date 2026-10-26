# `sameOriginPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742831-742840](../../../../../../reference/runtime/host-main.cjs#L742831-L742840) | `FunctionDeclaration` | não | `url2, origin` |
| [evaluation:515493-515502](../../../../../../reference/runtime/sand-eval-runner.cjs#L515493-L515502) | `FunctionDeclaration` | não | `url2, origin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742831-742840](../../../../../../reference/runtime/host-main.cjs#L742831-L742840) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:515493-515502](../../../../../../reference/runtime/sand-eval-runner.cjs#L515493-L515502) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:742831

Chamadas escritas diretamente neste corpo: `bare.slice`, `bare.startsWith`, `path33.startsWith`, `resolvesTo`, `url2.endsWith`, `url2.slice`, `url2.startsWith`.

SHA-256 do trecho: `305035a90718033aa215a1b246d56d5b9fc44c741016abc2b707218577fac328`.

### evaluation:515493

Chamadas escritas diretamente neste corpo: `bare.slice`, `bare.startsWith`, `path33.startsWith`, `resolvesTo`, `url2.endsWith`, `url2.slice`, `url2.startsWith`.

SHA-256 do trecho: `305035a90718033aa215a1b246d56d5b9fc44c741016abc2b707218577fac328`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
