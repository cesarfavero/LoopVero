# `comparablePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565787-565790](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565787-L565790) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565787-565790](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565787-L565790) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565787

Chamadas escritas diretamente neste corpo: `.replace`, `import_node_path36.posix.basename`, `import_node_path36.posix.dirname`, `import_node_path36.posix.normalize`, `path33.trim`, `toModelVisibleText`.

SHA-256 do trecho: `1653497ba1087b9b723b1746c77c5c58fcf40098043eed69c62b4a1e53b03fbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
