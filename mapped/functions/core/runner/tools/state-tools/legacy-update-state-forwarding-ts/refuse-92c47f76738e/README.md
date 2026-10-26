# `refuse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555722-555728](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555722-L555728) | `FunctionDeclaration` | não | `ctx, legacyName, target, reason, problem` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555722-555728](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555722-L555728) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555722

Chamadas escritas diretamente neste corpo: `legacyUpdateStateForwarded.refused`, `new ShimCall`, `new ToolCallArgParseError`, `shims.flush`, `shims.report`.

SHA-256 do trecho: `f35f5e795963b79b0cf27f1c7edbb885da8603bfb252820d799cc85ef856a722`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
