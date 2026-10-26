# `boundSkillSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565567-565578](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565567-L565578) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565567-565578](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565567-L565578) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:565567

Chamadas escritas diretamente neste corpo: `.join`, `.slice`, `Array.from`, `input2.query.trim`.

SHA-256 do trecho: `b9208103cefd985f7a76fd17af8e3fec70e4dbe2467440fbfaa3ce9a29bb9beb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
