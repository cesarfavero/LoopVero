# `renderPrLookup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-tool.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:568058-568087](../../../../../../reference/runtime/sand-eval-runner.cjs#L568058-L568087) | `FunctionDeclaration` | não | `lookup3, view` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568058-568087](../../../../../../reference/runtime/sand-eval-runner.cjs#L568058-L568087) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:568058

Chamadas escritas diretamente neste corpo: `lines2.join`, `lines2.push`, `lookup3.coordinators.map`, `lookup3.involved.map`, `lookup3.other.map`, `new Map`.

SHA-256 do trecho: `6c2481767980257dbb548a832f2bd1c95d9617fd0c804b6c847757488d625dc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
