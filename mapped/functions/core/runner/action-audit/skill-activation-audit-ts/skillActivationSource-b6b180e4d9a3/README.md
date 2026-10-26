# `skillActivationSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/action-audit/skill-activation-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/skill-activation-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534906-534918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534906-L534918) | `FunctionDeclaration` | não | `options2, catalog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534906-534918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534906-L534918) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:534906

Chamadas escritas diretamente neste corpo: `catalog.find`, `catalogSource`, `collapsedModelVisiblePath`, `import_node_path29.posix.isAbsolute`, `sourceFromDataRootTree`.

SHA-256 do trecho: `64ab802ee7f1556710db9ddee57298f63e841c62880e5d0e353f1cb9d17afe5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
