# `parseThreadParent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735116-735123](../../../../../../../reference/runtime/host-main.cjs#L735116-L735123) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540690-540697](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540690-L540697) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735116-735123](../../../../../../../reference/runtime/host-main.cjs#L735116-L735123) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540690-540697](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540690-L540697) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:735116

Chamadas escritas diretamente neste corpo: `.find`, `.map`, `/^From:\s*([^<(\n]+)/m.exec`, `/^Message TS:[^\n]*\n([\s\S]*)/m.exec`, `[computed].trim`, `afterTs.split`, `capPreviewLine`, `slackReadMessages`.

SHA-256 do trecho: `205b6722608c7c9aa29b60a5424aa4ba6c271e1eb989142a1de3411af46b81ce`.

### evaluation:540690

Chamadas escritas diretamente neste corpo: `.find`, `.map`, `/^From:\s*([^<(\n]+)/m.exec`, `/^Message TS:[^\n]*\n([\s\S]*)/m.exec`, `[computed].trim`, `afterTs.split`, `capPreviewLine`, `slackReadMessages`.

SHA-256 do trecho: `56b821d26ad41a3fdc8a9022b645b237bc42a0933c3b07c3b51e1f84f71ed915`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
