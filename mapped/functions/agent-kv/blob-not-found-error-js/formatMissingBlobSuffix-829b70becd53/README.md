# `formatMissingBlobSuffix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-not-found-error.js` · [README do módulo](../../../../modules/agent-kv/blob-not-found-error-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616347-616354](../../../../../reference/runtime/host-main.cjs#L616347-L616354) | `FunctionDeclaration` | não | `blobIdHexes` |
| [evaluation:284887-284894](../../../../../reference/runtime/sand-eval-runner.cjs#L284887-L284894) | `FunctionDeclaration` | não | `blobIdHexes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616347-616354](../../../../../reference/runtime/host-main.cjs#L616347-L616354) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:284887-284894](../../../../../reference/runtime/sand-eval-runner.cjs#L284887-L284894) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:616347

Chamadas escritas diretamente neste corpo: `.map`, `blobIdHexes.slice`, `shown.join`.

SHA-256 do trecho: `36787cb57a468266c61dec487767c4414e32cb8b02c7381228c6c5cfdd363c15`.

### evaluation:284887

Chamadas escritas diretamente neste corpo: `.map`, `blobIdHexes.slice`, `shown.join`.

SHA-256 do trecho: `36787cb57a468266c61dec487767c4414e32cb8b02c7381228c6c5cfdd363c15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
