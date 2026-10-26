# `parseNode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742747-742785](../../../../../../reference/runtime/host-main.cjs#L742747-L742785) | `FunctionDeclaration` | não | `depth, body` |
| [evaluation:515409-515447](../../../../../../reference/runtime/sand-eval-runner.cjs#L515409-L515447) | `FunctionDeclaration` | não | `depth, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742747-742785](../../../../../../reference/runtime/host-main.cjs#L742747-L742785) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:515409-515447](../../../../../../reference/runtime/sand-eval-runner.cjs#L515409-L515447) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:742747

Chamadas escritas diretamente neste corpo: `.map`, `.matchAll`, `/^\/?[A-Za-z][\w-]*/.exec`, `attrs.every`, `attrs.some`, `body.slice`, `body.startsWith`, `key.search`, `splitKey`.

SHA-256 do trecho: `09af82fc4751e8b40f33ed4b06f2a18a785aa8077108eb2347f5394a80ce927d`.

### evaluation:515409

Chamadas escritas diretamente neste corpo: `.map`, `.matchAll`, `/^\/?[A-Za-z][\w-]*/.exec`, `attrs.every`, `attrs.some`, `body.slice`, `body.startsWith`, `key.search`, `splitKey`.

SHA-256 do trecho: `09af82fc4751e8b40f33ed4b06f2a18a785aa8077108eb2347f5394a80ce927d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
