# `resolvePortalBaseUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/portal-base-url.ts` · [README do módulo](../../../../modules/core/portal-base-url-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508898-508905](../../../../../reference/runtime/host-main.cjs#L508898-L508905) | `FunctionDeclaration` | não | `readPortalBaseUrl, read2` |
| [evaluation:490294-490301](../../../../../reference/runtime/sand-eval-runner.cjs#L490294-L490301) | `FunctionDeclaration` | não | `readPortalBaseUrl, read2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508898-508905](../../../../../reference/runtime/host-main.cjs#L508898-L508905) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:490294-490301](../../../../../reference/runtime/sand-eval-runner.cjs#L490294-L490301) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:508898

Chamadas escritas diretamente neste corpo: `readPortalBaseUrl`.

SHA-256 do trecho: `0d189c5dae76e392a5608400540e8164bb31f6e6736f684d8587f76001d9b51d`.

### evaluation:490294

Chamadas escritas diretamente neste corpo: `readPortalBaseUrl`.

SHA-256 do trecho: `0d189c5dae76e392a5608400540e8164bb31f6e6736f684d8587f76001d9b51d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
