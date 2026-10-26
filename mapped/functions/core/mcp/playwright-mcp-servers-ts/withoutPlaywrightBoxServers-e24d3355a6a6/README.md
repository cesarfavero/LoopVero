# `withoutPlaywrightBoxServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-mcp-servers.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-mcp-servers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:514910-514928](../../../../../../reference/runtime/sand-eval-runner.cjs#L514910-L514928) | `FunctionDeclaration` | não | `accessor, catalog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514910-514928](../../../../../../reference/runtime/sand-eval-runner.cjs#L514910-L514928) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:514910

Chamadas escritas diretamente neste corpo: `accessor.get`, `catalog.map`, `new CombinedResourceAccessor`, `new Set`, `resourceEntry`.

SHA-256 do trecho: `83ab014fb5df3a48b1ef3c6bc7afef04a9e7eacd726eefaa56864e6f76e672ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
