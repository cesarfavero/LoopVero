# `parseMiroUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774190-774194](../../../../../../reference/runtime/host-main.cjs#L774190-L774194) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573405-573409](../../../../../../reference/runtime/sand-eval-runner.cjs#L573405-L573409) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774190-774194](../../../../../../reference/runtime/host-main.cjs#L774190-L774194) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573405-573409](../../../../../../reference/runtime/sand-eval-runner.cjs#L573405-L573409) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:774190

Chamadas escritas diretamente neste corpo: `isHostOf`, `miroDoc`, `segmentsOf`.

SHA-256 do trecho: `9203ad9c995d5188e839fe8186f200b2eb5aa181fbf3495421eb892621d768ad`.

### evaluation:573405

Chamadas escritas diretamente neste corpo: `isHostOf`, `miroDoc`, `segmentsOf`.

SHA-256 do trecho: `9203ad9c995d5188e839fe8186f200b2eb5aa181fbf3495421eb892621d768ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
