# `parseRawSandSettings`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490872-490881](../../../../../../reference/runtime/host-main.cjs#L490872-L490881) | `FunctionDeclaration` | não | `raw` |
| [evaluation:629096-629105](../../../../../../reference/runtime/sand-eval-runner.cjs#L629096-L629105) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490872-490881](../../../../../../reference/runtime/host-main.cjs#L490872-L490881) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:629096-629105](../../../../../../reference/runtime/sand-eval-runner.cjs#L629096-L629105) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:490872

Chamadas escritas diretamente neste corpo: `JSON.parse`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `399c23122ea785fb3aca943c4aee7c86b6de6c3cb5dc089395de279442af24bc`.

### evaluation:629096

Chamadas escritas diretamente neste corpo: `JSON.parse`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `de39f4310a390b693dfaad521bb060ec3c107d7f7a0107c780a00c97fef3c36d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
